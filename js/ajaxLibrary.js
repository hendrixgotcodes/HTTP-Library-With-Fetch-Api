class ajaxLibrary {

    //GET method
    open(url) {

        return new Promise((resolve, reject) => {

            fetch(url)
                .then((result) => result.json())
                .then((result2) => resolve(result2))
                .catch((error) => reject(error));

        })


    }

    //POST method
    post(url, data) {

        return new Promise((resolve, reject) => {


            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then((result) => result.json())
                .then((final) => resolve(final))
                .catch((error) => reject(error));

        })

    }

    //PUT method
    put(url, data) {

        return new Promise((resolve, reject) => {


            fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then((result) => result.json())
                .then((final) => resolve(final))
                .catch((error) => reject(error));

        })

    }

    //DELETE method
    delete(url) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },

                })
                .then((result) => result.json())
                .then((result2) => resolve(result2))
                .catch((error) => reject(error));

        })


    }
}