import React from "react";
import './Meme.css';
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs';
// import memesData from '../../memeData'


export default function Meme (){
    
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/265k.jpg',
        name: 'Third World Skeptical Kid',
        topText: '',
        bottomText: ''
    });

    const [allMemes, setAllMemes] = React.useState({});

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes)

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const {url, name} = allMemes[randomNumber];
       
        setMeme(prevMeme => {
            return { 
                ...prevMeme,
                randomImage: url,
                name: name
            }});
    }

    function handleChange(event){
        const {name, value} = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
               [name]: value,
            }
        })
    }

    return(
        <div className="meme">
            <div className="form">
                <input 
                    className="form--input"
                    placeholder='Top text'
                    type='text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input"
                    placeholder='Bottom text'
                    type='text'
                    value={meme.bottomText}
                    name='bottomText'
                    onChange={handleChange}
                />
                <button 
                    className="form--btn"
                    onClick={getMemeImage}>
                        <BsFillEmojiHeartEyesFill
                            className="form--btn-icon"
                            size='16'
                        />
                    Get new Meme Image
                </button>  
            </div>               
            <div className="meme--image-div">
                <img 
                    className="meme--image" 
                    src={meme.randomImage} 
                    alt={meme.name}
                />
                <div 
                    className="display--text top"
                    >{meme.topText}</div>
                <div 
                    className="display--text bottom"
                    >{meme.bottomText}</div>
            </div>
        </div>
    )
}