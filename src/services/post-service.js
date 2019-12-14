const postService = {
    load: function (id, limit, sort) {
        return fetch(`http://localhost:9999/api/post${id ? `/?iddd=${id}` : ''}${limit ? `?limit=${limit}` : ''}${sort ? `/?sort=${sort}` : ''}`).then(res => res.json());
    },

    create: function (data) {
        return fetch(`http://localhost:9999/api/post/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    },
};

export default postService;

/*
register: function (data) {
    return fetch(`http://localhost:9999/api/user/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json());
  },

load: function (id) {
        return fetch(`http://localhost:9999/api/post/${id ? `?id=${id}` : ''}`)
    },

  */

