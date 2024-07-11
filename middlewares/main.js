exports.maintenance = async(req, res, next) => {
    const {id} = req.headers

    if(!id){
        console.log("401 unauth user")
        return res.status(401).json({ message: "Unauthorized user" });
    }
    console.log("authentic user")
    next()
}

// exports.maintenance = async(req, res, next) => {
//     const {projectname ,amount} = req.body
    
//     if(projectname !="project1" ||amount <= 2000){
//         console.log("Please pay the full amount to access")
//         return res.status(401).json({ message: "Unauthorized user" });
//     }
//     else{
//         console.log("Access Gurrented");
//     }

//     console.log("authentic user")
//     next()
// }

// exports.maintenance = async(req, res, next) => {
//     try {
//         const id = req.params.id;
//         const verifiedUser =await User.findOne({_id:id})
//         if(verifiedUserd){
//           return res.status(400).json({message:"User not found"});
//         }
//         const updateUser = await User.findByIdAndUpdate(id, req.body,{
//           new:true
//         })
//         res.status(201).json(updateUser)
//       } catch (error) {
//         res.status(500).send('Server error');
//       }
//     next()
// }
