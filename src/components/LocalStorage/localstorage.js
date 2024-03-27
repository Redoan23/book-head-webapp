import { toast, ToastContainer, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getBook = () => {
    const books = localStorage.getItem('stored-books');
    if (books) {
        return JSON.parse(books)
    }
    return []

}

const addBook = id => {
    const book = getBook()
    const find = book.find(book => book === id);
    if (!find) {
        book.push(id)
        localStorage.setItem('stored-books', JSON.stringify(book))
        toast.success('Added to the Read List', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        })

    }
    if (find) {
        toast.warning('Already Added to the Read List', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        })
    }


}

// wishlist section

const getWishlist = () => {
    const wishList = localStorage.getItem('wishlist-books');
    if (wishList) {
        return JSON.parse(wishList)
    }
    return []
}

const wishlistBooks = id => {
    const stored = getWishlist()
    const getList = getBook()
    const get = stored.find(list => list === id)
    if (!get && !getList.includes(id)) {
        stored.push(id)
        localStorage.setItem('wishlist-books', JSON.stringify(stored))
        toast.success('Added to the Wishlist', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        })
    }
    else if (get && !getList.includes(id)) {
        toast.warning('You have added this to wishlist', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        })
    }

    else {
        toast.warning('You have already read this book', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        })
    }
}

export { getBook, addBook, getWishlist, wishlistBooks }