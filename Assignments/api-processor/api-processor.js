const axios = require("axios");

async function getUserTodo() {
    try {
        
        // Get all users
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userList = response.data

        // request to fetch todos for each users
        const requests = userList.map(person => axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${person.id}`))


        // execute all requests at once
        const todosData = await Promise.all(requests)

        // merge user details with completed todo titles 
        const combinedData = userList.map((person, id)=>{

            const  userTodos = todosData[id].data

            //get only completed todos and extract their titles
            const completedTitles = userTodos.filter(item => item.completed).map(item => item.title)

            //return new object combining user info and todo titles
            return{
                id: person.id,
                username: person.username,
                email: person.email,
                todos: completedTitles,

            }
        })

        console.log(combinedData)
        
    } catch (err) {
        console.error('something went wrong', err.message)
    }
    
}

getUserTodo()