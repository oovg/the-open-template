type PostType = {
  title: string
  matter: string
  content: string
  slug: string
  author: string
  excerpt: string
  date: string
  imagePath: string
  /** Media Shop path segment at media.theopenmachine.net/media/{mediaShopSlug} */
  mediaShopSlug?: string
}

export default PostType