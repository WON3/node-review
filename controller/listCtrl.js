const todos = [{
    title: 'walk the dog'
},
{
    title: 'feed the dog'
}];

module.exports = {
    getList: (request, response) => {
        response.send(todos);
    },
    add: (req, res) => {
        const todo = req.body;
        todos.push(todo);
        res.send(todos)
    },

    update: (req, res) => {
        // example of the url passed in through query compared to params
        // /api/list?index=1
        // /api/list/1
        const { index } = req.query;
        const { title } = req.body;

        todos[index].title = title;

        res.send(todos)
    },

    remove: (req, res) => {
        const { index } = req.params;
        todos.splice(index, 1);
        res.send(todos)
    }

}