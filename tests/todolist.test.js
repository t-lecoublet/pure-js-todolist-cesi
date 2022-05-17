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
    let newItem = new job.listItemObj();

    it('hbbbbb', ()=>{
        expect(job.addToList(newItem)).toEqual({"content":"","status":"incomplete"})
    })
}