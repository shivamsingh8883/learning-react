import { useState } from "react";

export default function GitHubUserFinder() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`,
      );
      const userData = await userResponse.json();

      if (userData.message === "Not Found") {
        alert("User not found");
        setLoading(false);
        return;
      }

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData.slice(0, 10));
    } catch (error) {
      alert("Error fetching data");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          GitHub User Finder
        </h1>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-white text-center">Loading...</p>}

        {user && (
          <div className="bg-gray-700 rounded-lg p-6 mb-8">
            <div className="flex gap-6 mb-6">
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-32 h-32 rounded-full"
              />
              <div className="text-white">
                <h2 className="text-3xl font-bold">
                  {user.name || user.login}
                </h2>
                <p className="text-gray-300 mb-2">@{user.login}</p>
                <p className="mb-4">{user.bio}</p>
                <div className="flex gap-6">
                  <div>
                    <span className="font-semibold">Followers:</span>{" "}
                    {user.followers}
                  </div>
                  <div>
                    <span className="font-semibold">Following:</span>{" "}
                    {user.following}
                  </div>
                  <div>
                    <span className="font-semibold">Repos:</span>{" "}
                    {user.public_repos}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {repos.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Recent Repositories
            </h3>
            <div className="space-y-3">
              {repos.map((repo) => (
                <div key={repo.id} className="bg-gray-700 p-4 rounded-lg">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-lg font-semibold"
                  >
                    {repo.name}
                  </a>
                  <p className="text-gray-300 mt-1">{repo.description}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-gray-400">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="text-sm text-gray-400">
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
