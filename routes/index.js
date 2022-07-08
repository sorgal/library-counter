const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

class Counter {
    constructor(bookUuid = "", count = 1, id = uuid()) {
        this.bookUuid = bookUuid
        this.count = count
        this.id = id
    }
}

const stor = {
    counters: [],
};

router.get('/counter/:id', (req, res) => {
    const {counters} = stor
    const {id} = req.params
    const idx = counters.findIndex(el => el.bookUuid === id)

    if (idx !== -1){
        let counter = counters[idx]
        counter.count++

        counters[idx] = {
            ...counter
        }

        res.status(200)

        res.json(counters[idx].count)
    } else {
        const newCounters = new Counter(id)
        counters.push(newCounters)

        res.status(200)
        res.json(newCounters.count)
    }
})

module.exports = router