import React, { useEffect, useState } from "react";

const DisplayNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notices
  useEffect(() => {
    fetch("http://localhost:8080/api/notices")  // change URL to your backend
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notices:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-5">📢 University Notices</h1>

      {loading && <p>Loading notices...</p>}

      {!loading && notices.length === 0 && (
        <p>No notices available.</p>
      )}

      {notices.map((notice) => (
        <div
          key={notice.id}
