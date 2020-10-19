// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCjpK5yN75bUmA-jNfWwI_Denznx70uKro",
    authDomain: "colegio-906dd.firebaseapp.com",
    databaseURL: "https://colegio-906dd.firebaseio.com",
    projectId: "colegio-906dd",
    storageBucket: "colegio-906dd.appspot.com",
    messagingSenderId: "832800300900",
    appId: "1:832800300900:web:0a31f35b86105b0b3ce471",
    measurementId: "G-6Y6MKNCVFZ"
};
// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);

console.log(defaultProject.name);
firebase.analytics();

let db = defaultProject.firestore();

//Ler todos os Dados de uma colecao

db.collection('turma').get()
    .then((snapshot) => {
        console.log("Lendo todos os Dados de uma colecao");
        snapshot.forEach(doc => {
            let alunos = doc.data();
            console.log(alunos.nome);

        });
        console.log("==========================")
    });


//lendo apenas um documento

let docRef = db.collection('turma').doc('nh7hxycHpycx67bVPBPS');
docRef.get().then((doc) => {
    let aluno = doc.data();
    console.log("lendo apenas um documento")
    console.log(aluno.nome);
    console.log("==========================");
});


//Buscando com metodo Where
db.collection('turma')
    .where('nome', '==', 'Danilo')
    .get()
    .then(snapshot => {
        console.log("Buscando com metodo Where");
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome, aluno.sobrenome);
        })
        console.log("==========================");
    })

//Insert

// db.collection("turma").add({
//     nome: 'Marcos',
//     sobrenome: 'Santos',
//     notas: { nota1: 9.6, nota2: 7.5 },
//     advertencias: [{
//         data: '',
//         desc: ''
//     }],
// }).then(doc => {
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// db.collection('turma')
//     .doc('AlunoNovo')
//     .set({
//         nome: 'Mariano',
//         sobrenome: 'Santos',
//         notas: { nota1: 8.6, nota2: 6.5 },
//         advertencias: [{
//             data: '',
//             desc: ''
//         }],
//     }).then(() => {
//         console.log("Documento inserido com sucesso")
//     }).catch(err => {
//         console.log(err)
//     })

//Update
// db.collection('turma')
//     .doc('AlunoNovo')
//     .set({
//         nome: 'Mariana',
//     }, { merge: true })
//     .then(() => {
//         console.log("Documento atualizado com sucesso")
//     }).catch(err => {
//         console.log(err)
//     })
db.collection('turma')
    .doc('AlunoNovo')
    .update({
        nome: 'Mariana',
    })
    .then(() => {
        console.log("Documento atualizado com sucesso")
    }).catch(err => {
        console.log(err)
    })