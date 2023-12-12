const Banner = ({img}) => {

    return(
        <div>
            <img
                src={/*`http://drive.google.com/uc?export=view&id=`*/img}
                alt="Banner promocional"
                style={{width:'100%',
                        marginBottom:'-.5rem'
                        }}
            />
        </div>
    )
}

export default Banner;