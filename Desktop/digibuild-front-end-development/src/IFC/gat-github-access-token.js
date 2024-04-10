/* globals FIL */
/* jshint esversion: 6 */
/* jshint loopfunc: true */

export default class GAT {}

GAT.getMenuGitHubAccessToken = function() {

    //GAT.divContents = divContents;
    //GAT.urlGitHubSource = "https://github.com/" + GAT.user + "/" + GAT.repo;
    //GAT.urlGitHubApiContents = 'https://api.github.com/repos/' + GAT.user + "/" + GAT.repo + '/contents/' + GAT.pathRepo;
    GAT.accessToken = localStorage.getItem( 'githubAccessToken' ) || '';

    const htm =
        `
		<details>

			<summary>GitHub API Access Token </summary>

			<div>
				<button id=butGAT class=butHelp onclick="GAT.setViewHelp(butGAT,GAT.helpFile);" >?</button>
			</div>

			<p>
				<div>Access token</div>
				<input value="${ GAT.accessToken }" id=GATinpGitHubApiKey onclick=this.select(); onblur=GAT.setGitHubAccessToken(this.value); title="Obtain API Access Token" style=width:100%; >
			</p>

			<p>
				<button id=GATbutRateLimits onclick=GAT.setViewRateLimits(GATbutRateLimits); title='If files and folder stop appearing, it is likely due to too many API calls' >
					View GitHub API rate limits
				</button>
			</p>


		</details>
	`;

    return htm;

};



GAT.setViewHelp = function () {


    if ( window.POP ) {

        POP.setPopupShowHide(butGAT,GAT.helpFile);

    } else {


    }

};

GAT.setGitHubAccessToken = function( accessToken ) {

    console.log( 'accessToken', accessToken );

    localStorage.setItem( "githubAccessToken", accessToken );

    GAT.accessToken = accessToken;

};





GAT.setViewRateLimits = function( button, target = divContents ) {
    //console.log( 'button', button );

    const url = "https://api.github.com/rate_limit";

    const xhr = new XMLHttpRequest();
    xhr.open( 'GET', url, true );
    xhr.onload = callback;
    xhr.send( null );

    function callback( xhr ) {

        const htm =
            `
			<h3>GitHub rate limits status</h3>

			<p>
				Some TooToo scripts use the GitHub Developer API which has rate limits.
			</p>

			<p>See <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">developer.github.com/v3</a>.</p>

			<pre> ${ xhr.target.response } </pre>
		`;

        target.innerHTML += htm;

    }

};