const { Movie } = require("../movie/movie.model");

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.list = async () => {
    try {
        const list = await Movie.find();
        console.log(list);
    } catch (error) {
        console.log(error);
    }
};

exports.update = async (filter, update) => {
    try {
        const updateMovie = await Movie.findOneAndUpdate(filter, update, { new: true });
        console.log(updateMovie);
    } catch (error) {
        
    }
};

exports.remove = async (search, cancel) => {
    try {
        const deleteMovie = await Movie.findOneAndDelete(search, cancel);
        console.log(deleteMovie);
        } catch (error) {
        
    }
};