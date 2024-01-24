import Exp from "../models/expModel.js";

const addExp = async(req, res) => {
    try {
        const { suggest, opinion, experience, email } =req.body;
        const newExp = new Exp({ suggest, opinion, experience, email });

        const sent = await newExp.save();
        res.status(201).send(sent)
    } catch(error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const getExps = async(req, res) => {
    try {
        const exps = await Exp.find();
       
        if(exps) {
            res.status(201).send(sent)
        } else {
            res.status(404).send("no experiences available");
        }
        
    } catch(error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const UpExp = async(req, res) => {
    try {

        const {id} = req.params;

        const expUp = await Exp.findOne({_id: id});
        const updE = await Exp.findByIdAndUpdate({_id: id}, {checked: !expUp.checked}, {returnDocument: "after"})
        res.status(200).send(expUp);

    } catch(error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const delExp = async(req, res) => {
    try {

        const {id} = req.params;
        const delExp = await Exp.findByIdAndDelete({_id: id});
        console.log(delExp);
        res.status(200).json({msg: "Deleted Experience"});

    } catch(error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export default {
    addExp,
    getExps,
    UpExp,
    delExp
}