export function validateExtension(
  path: string,
  type: 'image' | 'video' | 'document'
): boolean {
  const validExtensions = {
    image: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    video: ['mp4', 'webm'],
    document: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
  }

  const cleanedPath = path.split('?')[0] // Elimina todo después del ?
  const extension = cleanedPath.split('.').pop()?.toLowerCase() || '' // Obtiene la extensión y convierte a minúsculas

  return validExtensions[type].includes(extension)
}
