export const SET_NEWS_DATA = "SET_NEWS_DATA";

export const setNewsData = (newsData:any) => (dispatch:any) => {
    dispatch({
        type: SET_NEWS_DATA,
        payload: newsData
    })
}