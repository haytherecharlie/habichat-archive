import { Router } from 'express'
import config from 'config'
import * as editUserProfile from 'controllers/app/edit-user-profile/edit-user-profile'
import * as createCommunityPost from 'controllers/app/create-community-post/create-community-post'
import * as createCommunity from 'controllers/admin/create-community/create-community'
import * as signInWithEmail from 'controllers/auth/sign-in-with-email/sign-in-with-email'
import * as verifyEmail from 'controllers/auth/verify-email/verify-email'

const router = Router()
const { auth, app, admin } = config.routes

// Authentication
router.get(auth.signInWithEmail, signInWithEmail.GET) // Sign In with Email
router.get(auth.verifyEmail, verifyEmail.GET) // Verify Email

// Application
router.post(app.editUserProfile, editUserProfile.POST) // Edit User Profile
router.post(app.createCommunityPost, createCommunityPost.POST) // Create Community Post

// Admin
router.post(admin.createCommunity, createCommunity.POST)

export default router
