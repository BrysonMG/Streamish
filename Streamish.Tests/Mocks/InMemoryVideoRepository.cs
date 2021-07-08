using System;
using System.Collections.Generic;
using System.Linq;
using Streamish.Models;
using Streamish.Repositories;

namespace Streamish.Tests.Mocks
{
    // This is a repository that mimics the real VideoRepository
    // In this repo, we use a mock list of videos rather than getting data from the database with SQL
    class InMemoryVideoRepository : IVideoRepository // This repo inherits from the same interface as the real repo, which guarantees they contain the same methods
    {
        private readonly List<Video> _data; //This is a field for this repo. It will be the List of Videos that mimics what we would get from our database in the real repo

        public List<Video> InternalData //This is just a method that gets the list of videos that we constructed this repo with
        {
            get
            {
                return _data;
            }
        }

        public InMemoryVideoRepository(List<Video> startingData) //This is the constructor for this repo
        {
            _data = startingData;
        }

        public void Add(Video video)
        {
            var lastVideo = _data.Last();
            video.Id = lastVideo.Id + 1;
            _data.Add(video);
        }

        public void Delete(int id)
        {
            var videoToDelete = _data.FirstOrDefault(p => p.Id == id);
            if (videoToDelete == null)
            {
                return;
            }

            _data.Remove(videoToDelete);
        }

        public List<Video> GetAll()
        {
            return _data;
        }

        public Video GetById(int id)
        {
            return _data.FirstOrDefault(p => p.Id == id);
        }

        public void Update(Video video)
        {
            var currentVideo = _data.FirstOrDefault(p => p.Id == video.Id);
            if (currentVideo == null)
            {
                return;
            }

            currentVideo.Description = video.Description;
            currentVideo.Title = video.Title;
            currentVideo.DateCreated = video.DateCreated;
            currentVideo.Url = video.Url;
            currentVideo.UserProfileId = video.UserProfileId;
        }

        public List<Video> Search(string criterion, bool sortDescending)
        {
            throw new NotImplementedException();
        }

        public List<Video> GetAllWithComments()
        {
            throw new NotImplementedException();
        }

        public Video GetVideoByIdWithComments(int id)
        {
            throw new NotImplementedException();
        }
    }
}
