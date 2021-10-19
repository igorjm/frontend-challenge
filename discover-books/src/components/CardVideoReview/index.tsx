import { FC } from "react";
import './style.css';

interface ICardVideoReview {
    thumb: string;
    url: string;
}

const CardVideoReview: FC<ICardVideoReview> = ({ thumb, url }) => {
    const urlString = url;
    
    return (
        <section className='thumbnailImg'>
            <img
                src={thumb}
                className='thumbnailContainer'
                alt=' '
                onClick={() => window.open(urlString, "_blank")}
            />
        </section>
    );
}

export default CardVideoReview;