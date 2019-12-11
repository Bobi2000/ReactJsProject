const postService = {
    load: function (id, limit) {
        return fetch (`http://localhost:9999/api/post${id ? `/${id}`: ''}${limit ? `?limit=${limit}`: ''}`).then(res => res.json());
    }
};

export default postService;