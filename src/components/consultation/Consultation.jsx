import './consultation.css';

const Consultation = () => {
    return (
        <div>
            <div className="consultation">
                <div className="consultation__container">
                    <div className="consultation__header"><h2 className="consultation__title">Get Our<br/>Free Consultation</h2></div>
                    <div className="consultation__cta__portion">
                        <p className="consultation__cta__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Accusamus pariatur sequi reiciendis laudantium.</p>
                        <div className="consultation__cta__button">
                            <button className="consultation__button">Free Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultation;
