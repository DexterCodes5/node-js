const { people } = require("../data")

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const postPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "please provide name"
    })
  }
  return res.status(201).json({
    success: true,
    person: name
  })
}

const postPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
    .status(400)
    .json({ 
      success: false, 
      msg: "please provide name"
    })
  }
  people.push({id: 0, name})
  res.status(201).json({ success: true, people })
}

const putPerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const person = people.find(elem => elem.id === Number(id))
  if (!person) {
    return res.status(404).json({success: false, msg: `no person with id: ${id}`})
  }
  person.name = name
  res.status(200).send({success: true, data: people})
}

const deletePerson = (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({success: false, msg: `id is not a number`})
  }
  let idx;
  for (let i = 0; i < people.length; i++) {
    if (people[i].id === Number(id)) {
      idx = i;
      break;
    }
  }
  if (idx === undefined) {
    return res.status(404).json({success: false, msg: `no person with id: ${id}`})
  }
  people.splice(idx, 1)
  res.status(200).send({success: true, data: people})
}

module.exports = {getPeople, postPerson, postPersonPostman, putPerson, deletePerson}