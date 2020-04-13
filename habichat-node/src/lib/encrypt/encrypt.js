export default async text => await bcrypt.hash(text, 10)
