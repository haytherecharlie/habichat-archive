import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from 'services/firebase'

const useDatabaseListener = (type) => {
  let listen = false
  const { community } = useSelector((s) => s.user)
  const dispatch = useDispatch()

  const handleAddedDocument = (value) => dispatch({ type: `ADD_${type.toUpperCase()}`, value })
  const handleModifiedDocument = (value) => dispatch({ type: `UPDATE_${type.toUpperCase()}`, value })
  const handleRemovedDocument = (value) => dispatch({ type: `DELETE_${type.toUpperCase()}`, value })

  const parseSnapshot = (documents) => {
    if (listen === true) {
      documents.docChanges().forEach((value) => {
        switch (value.type) {
          case 'added':
            return handleAddedDocument({ id: value.doc.id, ...value.doc.data() })
          case 'modified':
            return handleModifiedDocument({ id: value.doc.id, ...value.doc.data() })
          case 'removed':
            return handleRemovedDocument({ id: value.doc.id, ...value.doc.data() })
          default:
            return
        }
      })
    }
    listen = true
  }

  useEffect(() => {
    const listener = db.collection(`communities/${community}/${type}`).onSnapshot(parseSnapshot)
    return () => listener()
  }, [])
}

export default useDatabaseListener
