class Twitter {
    constructor() {
        this.time = 0;

        this.followingMap = new Map(); 
       
        this.tweetsMap = new Map();
    }

    postTweet(userId, tweetId) {
        if(!this.tweetsMap.has(userId)) this.tweetsMap.set(userId, []);

        this.tweetsMap.get(userId).push({id: tweetId, time: this.time++});
    }

    getNewsFeed(userId) {
        const feed = [];
    
        const followers = new Set(this.followingMap.get(userId) || []);
       
        followers.add(userId);
        
        for(let followerId of followers) {
            let userTweets = this.tweetsMap.get(followerId);

            if(userTweets) feed.push(...userTweets);
        }
        
        return feed
        .sort((a, b) => b.time - a.time)
        .slice(0, 10)
        .map(t => t.id);
    }

    follow(followerId, followeeId) {
        if(!this.followingMap.has(followerId)) this.followingMap.set(followerId, new Set());

        this.followingMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if(this.followingMap.has(followerId)) this.followingMap.get(followerId).delete(followeeId);
    }
}
