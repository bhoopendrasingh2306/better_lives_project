const mongoose = require('mongoose')

class CoreRepo {

    constructor(modal, data) {
        if (data) {
            this.doc = new modal(data);
        }
        this.modal = modal;
        this.data = data;
    }

    save() {
        return this.doc.save();
    }

    details(query) {
        const data = this.modal.findOne(query.searchQuery || {});

        if (query.isLean) {
            data.islean()
        }

        if (query.sort) {
            data.sort()
        }

        return data;
    }

    list(query) {
        const data = this.modal.find(query.searchQuery || {});

        if (query.sort) {
            data.sort(query.sort)
        }

        if (query.isLean) {
            data.islean()
        }

        if (query.offset) {
            data.skip(query.offset);
        }

        if (query.limit) {
            data.limit(query.limit);
        }

        return data;
    }

    update(searchQuery, data) {
        return this.modal.updateMany(searchQuery, data);
    }

    delete(searchQuery) {
        return this.modal.deleteMany(searchQuery)
    }

    findOneAndUpdate(searchQuery, data, options) {
        return this.modal.findOneAndUpdate(searchQuery, data, options);
    }

    aggregate(query) {
        return this.modal.aggregate(query).exec();
    }

}

module.exports = {
    CoreRepo
}