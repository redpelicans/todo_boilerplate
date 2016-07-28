import async from 'async';

const fromJson = ({ label, id }) => ({ label, id });

export const init = (app, $) => {
  app.get('/todo/lists', (req, res, next) => {
    $.store.todos.lists.getAll((err, result) => {
      if (err) return next(err);
      res.json(result);
    });
  });

  app.post('/todo/lists', (req, res, next) => {
    console.log(req.body)
    const todo = req.body.todo;
    $.store.todos.lists.add(fromJson(todo), (err, result) => {
      if (err) return next(err);
      res.json(result);
    });
  });

  app.put('/todo/lists', (req, res, next) => {
    const updates = fromJson(req.body.todo);
    $.store.todos.lists.update(updates, (err, result) => {
      if (err) return next(err);
      res.json(result);
    });
  });
  
  app.delete('/todo/list/:id', (req, res, next) => {
    let id = Number(req.params.id);
    $.store.todos.lists.remove(id, (err, isDeleted) => {
      if (err) return next(err);
      res.json({ id, isDeleted });
    });
  })
}
