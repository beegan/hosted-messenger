import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000, users: 2400, newUsers: 1800 },
  { name: 'Feb', value: 3000, users: 1398, newUsers: 1000 },
  { name: 'Mar', value: 2000, users: 9800, newUsers: 2200 },
  { name: 'Apr', value: 2780, users: 3908, newUsers: 2500 },
  { name: 'May', value: 1890, users: 4800, newUsers: 2300 },
  { name: 'Jun', value: 2390, users: 3800, newUsers: 2100 },
  { name: 'Jul', value: 3490, users: 4300, newUsers: 2400 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid">
        <div className="summary-cards" style={{ gridColumn: 'span 12' }}>
          <div className="grid">
            <div className="summary-card card" style={{ gridColumn: 'span 3' }}>
              <h3 className="card-title">Total Revenue</h3>
              <div className="card-value">$24,780</div>
              <div className="card-change positive">+12.5% from last month</div>
            </div>
            <div className="summary-card card" style={{ gridColumn: 'span 3' }}>
              <h3 className="card-title">Active Users</h3>
              <div className="card-value">8,642</div>
              <div className="card-change positive">+7.2% from last month</div>
            </div>
            <div className="summary-card card" style={{ gridColumn: 'span 3' }}>
              <h3 className="card-title">Conversion Rate</h3>
              <div className="card-value">5.27%</div>
              <div className="card-change negative">-0.3% from last month</div>
            </div>
            <div className="summary-card card" style={{ gridColumn: 'span 3' }}>
              <h3 className="card-title">Avg. Session</h3>
              <div className="card-value">4m 32s</div>
              <div className="card-change positive">+12.3% from last month</div>
            </div>
          </div>
        </div>
        
        <div className="chart-container card" style={{ gridColumn: 'span 8' }}>
          <div className="card-header">
            <h2 className="card-title">Revenue Overview</h2>
            <div className="card-actions">
              <select className="time-select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button className="btn btn-secondary">Export</button>
            </div>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5664d2" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#5664d2" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#5664d2" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="sidebar-widgets" style={{ gridColumn: 'span 4' }}>
          <div className="card user-activity">
            <h3 className="card-title">User Activity</h3>
            <div className="activity-chart">
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="users" fill="#5664d2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="activity-stats">
              <div className="stat">
                <span className="stat-label">New Users</span>
                <span className="stat-value">842</span>
              </div>
              <div className="stat">
                <span className="stat-label">Returning</span>
                <span className="stat-value">7,800</span>
              </div>
            </div>
          </div>
          
          <div className="card recent-activity">
            <h3 className="card-title">Recent Activity</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon payment"></div>
                <div className="activity-info">
                  <div className="activity-title">New subscription</div>
                  <div className="activity-time">2 minutes ago</div>
                </div>
                <div className="activity-value">$24.99</div>
              </li>
              <li className="activity-item">
                <div className="activity-icon user"></div>
                <div className="activity-info">
                  <div className="activity-title">New user registered</div>
                  <div className="activity-time">15 minutes ago</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon alert"></div>
                <div className="activity-info">
                  <div className="activity-title">Server alert resolved</div>
                  <div className="activity-time">1 hour ago</div>
                </div>
              </li>
            </ul>
            <button className="btn btn-secondary view-all-btn">View All Activity</button>
          </div>
        </div>
        
        <div className="customer-section card" style={{ gridColumn: 'span 12' }}>
          <div className="card-header">
            <h2 className="card-title">Recent Customers</h2>
            <button className="btn btn-primary">Add Customer</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Revenue</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="customer-info">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer" className="customer-avatar" />
                      <span>Emma Wilson</span>
                    </div>
                  </td>
                  <td>emma.wilson@example.com</td>
                  <td><span className="status-badge active">Active</span></td>
                  <td>Jun 12, 2023</td>
                  <td>$1,289.85</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn more">...</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="customer-info">
                      <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Customer" className="customer-avatar" />
                      <span>James Rodriguez</span>
                    </div>
                  </td>
                  <td>james.r@example.com</td>
                  <td><span className="status-badge active">Active</span></td>
                  <td>May 8, 2023</td>
                  <td>$3,592.25</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn more">...</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="customer-info">
                      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer" className="customer-avatar" />
                      <span>Olivia Parker</span>
                    </div>
                  </td>
                  <td>olivia.p@example.com</td>
                  <td><span className="status-badge inactive">Inactive</span></td>
                  <td>Apr 15, 2023</td>
                  <td>$945.00</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn more">...</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="customer-info">
                      <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Customer" className="customer-avatar" />
                      <span>Noah Chen</span>
                    </div>
                  </td>
                  <td>noah.c@example.com</td>
                  <td><span className="status-badge active">Active</span></td>
                  <td>Mar 22, 2023</td>
                  <td>$2,145.30</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn more">...</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className="pagination-btn prev">Previous</button>
            <div className="pagination-numbers">
              <button className="pagination-number active">1</button>
              <button className="pagination-number">2</button>
              <button className="pagination-number">3</button>
              <span>...</span>
              <button className="pagination-number">8</button>
            </div>
            <button className="pagination-btn next">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
