const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const TOKEN_SECRET = 'your_jwt_secret_key';

//ברגע שהמשתמש שנכנס הוא באמת מנהל הוא יוצר תוקן
const login = (async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await Users.findOne({ email });
        console.log(user);
        console.log(password);
        console.log(user.password);

        if (!user) {
            return res.status(400).json({ message: 'Invalid name or password.' });
        }

        // השוואת הסיסמה שהוזנה לסיסמה המוצפנת
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            console.log("not valid passord");
            console.log(password);
            console.log(user.password);
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // יצירת טוקן JWT
        const token = jwt.sign({ _id: user._id, role: user.role }, TOKEN_SECRET, { expiresIn: '1h' });
        res.header("auth-token", token).send({ "token": token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
});

//הרשמה של משתמש חדש _OK
const register = (async (req, res) => {
    const { name, password, email, role } = req.body;
    console.log("Password:", password); // בדוק את הסיסמה
    console.log("User Email:", email); // בדוק את שם המשתמש
    try {
        // בדיקה אם המשתמש כבר קיים
        const existingUser = await Users.findOne({ email });
        console.log("Existing Admin:", existingUser);

        if (existingUser !== null) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // הצפנת הסיסמה
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Salt:", salt);
        console.log("Hashed Password:", hashedPassword); // בדוק את הסיסמה המוצפנת

        // יצירת מנהל חדש ושמירתו
        const user = new Users({ name, password: hashedPassword, email, role });
        await user.save();

        res.status(200).json({ message: 'The user has been successfully added', user });
    } catch (error) {
        console.error("Error:", error); // הדפס את השגיאה לקונסולה
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = {
    login,
    register
};
