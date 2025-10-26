"use client"

import { FiBook, FiPlus, FiTrash2, FiEdit2, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  lastEdited: string;
  status: 'published' | 'draft';
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', name: 'My Portfolio', lastEdited: '2023-05-15', status: 'published' },
    { id: '2', name: 'Business Site', lastEdited: '2023-06-20', status: 'draft' },
    { id: '3', name: 'Blog Project', lastEdited: '2023-07-10', status: 'draft' },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const createProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    
    const newProject = {
      id: Date.now().toString(),
      name: newProjectName,
      lastEdited: new Date().toISOString().split('T')[0],
      status: 'draft' as const
    };
    
    setProjects([...projects, newProject]);
    setNewProjectName('');
    setShowCreateModal(false);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-[80px]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <motion.h1 
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Your Projects
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Manage and edit your websites
          </motion.p>
        </header>

        <motion.div 
          className="mb-8 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiPlus /> New Project
          </button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                  <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6">Last edited: {project.lastEdited}</p>
                <div className="flex justify-end gap-2">
                  <button 
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    title="Edit"
                  >
                    <FiEdit2 />
                  </button>
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCreateModal(false)}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Create
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}