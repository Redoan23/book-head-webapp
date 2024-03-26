export default function Books({book}){

    const{bookId,bookName,author,image,review,category}=book

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}