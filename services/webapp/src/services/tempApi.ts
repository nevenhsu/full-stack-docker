import axios from 'axios'

const tempApi = {
    greet: async (): Promise<string> => {
        const url = `${process.env.REACT_APP_URL}/get`
        const { data } = await axios.get<string>(url)

        return data
    },
}

export default tempApi
