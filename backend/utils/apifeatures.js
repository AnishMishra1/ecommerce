class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    //making Search Filter
    search(){
        const Keyword = this.queryStr.Keyword ? {
        name : {
            $regex: this.queryStr.Keyword,
            $options : "i"
        }
        } 
        :{};

        this.query = this.query.find({...Keyword})
        return this;
    }

    //making filter
    filter(){
        const queryCopy = {...this.queryStr};
        //REMOVING SOME FILEDS FOR CATEGORY

        const removeFields = ["keyword","page","limit"];

        removeFields.forEach((key) => delete queryCopy[key])

        //filter for price and rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g), (key) => `$${key}`

        this.query = this.query.find(queryCopy);
        return this;
    }


    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

module.exports = ApiFeatures;