import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://poetrydb.org',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

export const poemService = {
  async getAuthors() {
    try {
      const response = await apiClient.get('/author')
      return response.data.authors
    } catch (error) {
      console.error('Error fetching authors:', error)
      throw error
    }
  },
  async getPoemsByAuthor(author) {
    try {
      const response = await apiClient.get(`/author/${author}`)
      return response.data
    } catch (error) {
      console.error('Error fetcching poems: ', error)
      throw error
    }
  }
}
