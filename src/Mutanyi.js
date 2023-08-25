function Mutanyi() {
    const cardStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#fff',
        transition: 'background-color 0.3s ease'
    };
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
    };

    return (
        <div style={cardStyle}>
            <h4>Salutations! My name is Tom Omele Mutanyi, here's a little something about me:</h4>
            <img src="https://images.pexels.com/photos/7605818/pexels-photo-7605818.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tom Omele Mutanyi" style={imageStyle} />
            <p>
                I am a passionate full stack developer on an 
                exciting journey of mastering the realms of JavaScript and Python. 
                With an insatiable curiosity for coding and a determination to craft seamless digital experiences,
                I'm dedicated to honing my skills to create dynamic and robust web applications from front to back.
            </p>
        </div>
    );
}

export default Mutanyi;
