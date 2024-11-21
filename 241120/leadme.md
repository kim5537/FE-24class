/_ RestFul API 방법을 사용하지 않는 경우 _/
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delet Video

/_ RestFul API 방법을 사용하는 경우 _/

/ 글로벌 라우터
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users로 시작하는 페이지 라우팅 => 라우터 필요
/users/logout -> logout User
/users/edit -> Edit User
/users/delete -> Delete User
/users/:id -> Segment User

/video로 시작하는 페이지 라우팅 => 라우터 필요
/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> comment Video
/video/comments/delete -> Delete comment
