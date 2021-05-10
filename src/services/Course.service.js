import axios from 'axios'
class Course {

    findAll() {
        return new Promise(async (resolve,reject) => {
            try {
                const response = await axios.get('/course')
                return resolve(response.data)
            } catch (error) {
                return reject(error.response.data)
            } finally {
                // หลังจากเสร็จใน try หรือ catch จะเข้าfinally (มีหรือไม่มีก็ได้)
            }
        })
    }

    findOne(id) {
        return new Promise(async (resolve,reject) => {
            try {
                const response = await axios.get(`/course/${id}`)
                return resolve(response.data)
            } catch (error) {
                return reject(error.response.data)
            }
        })
    }
}

export default new Course()