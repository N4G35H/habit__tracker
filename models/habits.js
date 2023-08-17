const mongoose=require('mongoose');

// Creating the Habits of User
const habitSchema=new mongoose.Schema({
    habit:{
        type:String,
        reuired:true
    },
    description:{
        type:String,
        reuired:true
    },
    start:{
        type:String,
    },
    end:{
        type:String,
    },
    frequency:{
        type:String,
        reuired:true
    },
    date:{
        type:String
    },
    time:{
        type:String,
        reuired:true
    },
    streak:{
        type:Number,
        default:0
    },
    days:{
        one:{
            type:String,
            default:null
        },
        two:{
            type:String,
            default:null
        },
        three:{
            type:String,
            default:null
        },
        four:{
            type:String,
            default:null
        },
        five:{
            type:String,
            default:null
        },
        six:{
            type:String,
            default:null
        },
        seven:{
            type:String,
            default:null
        }
    }
});

const Habit=mongoose.model('Habit',habitSchema);

module.exports=Habit;