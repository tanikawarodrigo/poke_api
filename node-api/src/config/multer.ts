// import multer from 'multer'
// import {resolve} from 'path'
// import cryto, { randomBytes } from 'crypto'
// import { Options, diskStorage } from 'multer'


// export const multerConfig= {
    
//     dest: resolve(__dirname,'..','uploads'),
//     storage: diskStorage({
//         destination:(request,file,callback)=>{
//             callback(null,resolve(__dirname,'..','uploads'))
//         },
//         filename: (request,file,callback) =>{
//             randomBytes(16,(error,hash)=>{
//                 if(error){
//                     callback(error,file.filename)
//                 }
//                 const filename= `${hash.toString}.png`
//                 callback(null,filename)
//             })
//         }
//     }),
//     limits:{
//         fileSize: 5 *1024*1024
//     },
//     fileFilter:(request,file,callback)=>{
//         const formats=[
//             'image/jpeg',
//             'image/jpg',
//             'image/png'
//         ];
//         if(formats.includes(file.mimetype)){
//             callback(null,true)
            
//         } else {
//             callback(new Error('formato nao aceito'))
//         }
//     }
   
// } as Options

// // const hash = cryto.randomBytes(6).toString('hex');
// // const fileName = `${hash}-${file.originalname}`;
// // callback(null,fileName);