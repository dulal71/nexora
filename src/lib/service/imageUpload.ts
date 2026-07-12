'use server'

const Imagbb_key = process.env.IMAGBB_API_KEY
const IMGBB_UPLOAD_URL = 'https://api.imgbb.com/1/upload'

interface ImgBBResponse {
  data: {
    id: string
    url: string
    display_url: string
    delete_url: string
  }
  success: boolean
  status: number
}

export const uploadImage = async (file: File): Promise<ImgBBResponse> => {
  if (!Imagbb_key) {
    throw new Error('IMGBB_API_KEY is not set in environment variables')
  }

  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch(`${IMGBB_UPLOAD_URL}?key=${Imagbb_key}`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    throw new Error(`Image upload failed: ${res.status}`)
  }

  const result: ImgBBResponse = await res.json()

  if (!result.success) {
    throw new Error('ImgBB reported an unsuccessful upload')
  }

  return result
}