import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [notices, setNotices] = useState([]);

  // Sample data; replace with API call later
  useEffect(() => {
    const sampleNotices = [
      {
        id: 1,
        title: "Semester Exam Schedule Released",
        date: "2025-07-20",
        description: "Final exam schedule for semester 2 is now available on the exam portal.",
      },
      {
        id: 2,
        title: "New Library Opening Hours",
        date: "2025-07-18",
        description: "Library will be open from 7 AM to 9 PM during exam week.",
      },
    ];
    setNotices(sampleNotices);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">University Notice Board</h1>
        <p className="text-gray-600 mt-2">Stay up to date with the latest campus updates</p>
      </header>

 
export default HomePage;

