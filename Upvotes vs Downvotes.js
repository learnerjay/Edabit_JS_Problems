/*
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
*/
/*
Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ? 13
getVoteCount({ upvotes: 2, downvotes: 33 }) ? -31
getVoteCount({ upvotes: 132, downvotes: 132 }) ? 0
*/
/*
Test cases
Test.assertEquals(getVoteCount({ upvotes: 13, downvotes: 0 }), 13)
Test.assertEquals(getVoteCount({ upvotes: 2, downvotes: 33 }), -31)
Test.assertEquals(getVoteCount({ upvotes: 132, downvotes: 132 }), 0)
Test.assertEquals(getVoteCount({ upvotes: 0, downvotes: 0 }), 0)
Test.assertEquals(getVoteCount({ downvotes: 4, upvotes: 1 }), -3)
*/
Solution
function getVoteCount(votes) {
 return (votes.upvotes - votes.downvotes);	
}
