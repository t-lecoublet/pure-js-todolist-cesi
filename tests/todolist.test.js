import * as job from '../src/job.js'

/*
 *  =============
 *      JOB
 *  =============
*/

describe('JOB listItemObj', () => {


    it('should return job item', ()=>{
        expect(new job.listItemObj()).toEqual({content:"",status:"incomplete"})
    })

    it('should return diff job item', ()=>{
        expect(new job.listItemObj()).not.toEqual({content:"nonDefault",status:"complete"})
    })

    it('should return equal job item', ()=>{
        expect(new job.listItemObj("nonDefault","incomplete")).toEqual({content:"nonDefault",status:"incomplete"})
    })

})



describe('JOB addToList', () => {

    it('should return the same array', ()=>{
        job.addToList({content:"",status:"incomplete"});
        expect(job.listArray).toStrictEqual([{content:"",status:"incomplete"}])
    })

})




describe('JOB refreshLocal', ()=> {

    beforeEach(()=>{
        job.listArray = [{content:"",status:"incomplete"}];
        localStorage.setItem('todoList', JSON.stringify([{content:"yes",status:"complete"}]));
        job.refreshLocal();
        });

    it('should ', ()=> {
        expect(localStorage.todoList).not.toEqual(JSON.stringify([{content:"yes",status:"complete"}]))
    })

    it('should ', ()=> {
        expect(localStorage.todoList).toEqual(JSON.stringify([{content:"",status:"incomplete"}]))
    })

})

describe('JOB setListArray', () => {
    beforeEach(()=>{
        job.setListArray([{content:"",status:""}])
        });
    it('should return the same array', ()=>{
        expect(job.listArray).toEqual([{content:"",status:""}])
    })

    it('should return the diff array', ()=>{
        expect(job.listArray).not.toEqual([{content:"",status:"diff"}])
    })

})

describe('JOB getToDoList', ()=> {

    beforeEach(()=>{
        localStorage.setItem('todoList', JSON.stringify([{content:"yes",status:"complete"}]));
        });

    it('should ', ()=> {
        expect(job.getToDoList()).toEqual(JSON.stringify([{content:"yes",status:"complete"}]))
    })

    it('should ', ()=> {
        expect(job.getToDoList()).not.toEqual(JSON.stringify([{content:"",status:""}]))
    })



})

describe('JOB clearList', ()=> {

    beforeEach(()=>{
        job.listArray = [{content:"yes",status:"complete"}]
        localStorage.setItem('todoList', JSON.stringify(job.listArray));
        });

    it('should ', ()=> {
        job.clearList();
        expect(localStorage.todoList).toBeFalsy()
        expect(job.listArray == [{content:"yes",status:"complete"}]).toBeFalsy()
    })

})



/*

HAVE FUN J'AI PAS FINI

describe('DOM', ()=> {
    beforeEach(()=>{
    document.body.innerHTML =
    '<section id="grid">'+
    '</section>' ;
    });
    it('should give success', ()=> {

        renderGrid(2)
        let DOMInnerText = document.getElementById('grid-1').innerHTML
        expect(DOMInnerText).toEqual('1')
    })

})*/