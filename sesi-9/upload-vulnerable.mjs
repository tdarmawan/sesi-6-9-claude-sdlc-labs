// Fixture edukasi; hanya mengembalikan metadata, tidak menulis file.
export const validateUpload = file => file.mime==='image/png'?{ok:true}:{ok:false,reason:'Unsupported type'};
