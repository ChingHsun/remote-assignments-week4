const ContentBox = ({product}) => {
    return(
        <div className="content_box">{
            !product?
                <p>Content Box</p>:
                <div>
                     <p>商品名稱：{product.name}</p>
                     <p>商品價格：{product.price}</p>
                     <p>商品描述：{product.description}</p>

                </div>
               
                    
        }</div>

    )
}

export default ContentBox;