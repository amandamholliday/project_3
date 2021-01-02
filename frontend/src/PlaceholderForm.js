import { useRef, useEffect } from 'react';

export default (props) => {
    const titleInput = useRef(null);
    const urlInput = useRef(null);
    const createPlaceholder = async (event) => {
        event.preventDefault()
        const title = titleInput.current.value; 
        const url = urlInput.current.value;
        const body = JSON.stringify({
            title, url
        });
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:3000/placeholder', {
              method: 'POST',
              headers : {
                  'Content-type': 'application/json'
              },
              body: body
            })
            const data = await response.json();
            // event.currentTarget.reset()
            // props.updateBookmarks([...props.bookmarks.data])
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form onSubmit={createPlaceholder}>
            Title: <input type="text" ref={titleInput} /><br />
            Url: <input type="text" ref={urlInput} /><br />
            <input type="submit" value="Add"/>
        </form>
    )
}