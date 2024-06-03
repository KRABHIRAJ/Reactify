const useGetIdAndTags = (url) => {
    // Create a URL object
    const parsedUrl = new URL(url);

    // Get the search parameters
    const queryParams = new URLSearchParams(parsedUrl.search);

    // Extract collection_id and tags
    const collectionId = queryParams.get('collection_id');
    const tags = queryParams.get('tags');

    return { collectionId, tags }
}

export default useGetIdAndTags;