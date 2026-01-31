import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { Phone, Globe, Download, MapPin, Search, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Component to handle map interactions
const MapController: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo(center, 10, { duration: 2 });
  }, [center, map]);
  return null;
};

export const Resources: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Crisis' | 'Support' | 'Information'>('All');
  const [mapCenter, setMapCenter] = useState<[number, number]>([39.8283, -98.5795]);
  const [isLocating, setIsLocating] = useState(false);

  const filteredResources = filter === 'All' 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === filter);

  const handleLocateMe = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMapCenter([position.coords.latitude, position.coords.longitude]);
        setIsLocating(false);
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Could not access your location. Please check browser permissions.");
        setIsLocating(false);
      });
    } else {
      alert("Geolocation is not available in your browser.");
      setIsLocating(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-brand-700 font-semibold tracking-wide uppercase text-sm">Help is available</span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Resource Hub</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find the support you need, whether it is a national hotline, local support group, or educational materials.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12" role="group" aria-label="Filter Resources">
          {['All', 'Crisis', 'Support', 'Information'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              aria-pressed={filter === cat}
              className={`px-6 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
                filter === cat 
                  ? 'bg-brand-700 text-white shadow-lg shadow-brand-200' 
                  : 'bg-white text-slate-700 hover:bg-brand-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 p-6 flex flex-col h-full animate-slideUp">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  resource.category === 'Crisis' ? 'bg-red-100 text-red-800' : 
                  resource.category === 'Support' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {resource.category}
                </span>
                {resource.isNational && <span className="text-xs text-slate-500 font-medium flex items-center gap-1"><Globe size={12} aria-hidden="true"/> National</span>}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2">{resource.name}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{resource.description}</p>
              
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700 font-semibold">
                  <div className="p-2 bg-brand-50 text-brand-700 rounded-lg">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <a href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`} className="hover:text-brand-700 focus:outline-none focus:underline">{resource.phone}</a>
                </div>
                <a 
                  href={resource.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-brand-700 hover:text-brand-800 transition-colors text-sm font-medium group focus:outline-none focus:underline"
                >
                  <div className="p-2 bg-slate-50 text-slate-500 group-hover:text-brand-600 rounded-lg">
                    <Globe size={18} aria-hidden="true" />
                  </div>
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 relative">
          <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Find Support Near You</h2>
              <p className="text-slate-600">Locate counseling centers and support groups in your area.</p>
            </div>
            <button 
              onClick={handleLocateMe}
              disabled={isLocating}
              className="flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-lg font-medium hover:bg-brand-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Navigation size={18} className={isLocating ? "animate-spin" : ""} />
              {isLocating ? "Locating..." : "Use My Location"}
            </button>
          </div>
          
          {/* Map Container */}
          <div className="h-96 w-full relative z-0">
             <MapContainer center={mapCenter} zoom={4} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <MapController center={mapCenter} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Demo Markers */}
                <Marker position={[38.9072, -77.0369]}>
                  <Popup><strong>National Crisis Center</strong><br />Washington, DC</Popup>
                </Marker>
                <Marker position={[34.0522, -118.2437]}>
                  <Popup><strong>West Coast Support Hub</strong><br />Los Angeles, CA</Popup>
                </Marker>
                <Marker position={[41.8781, -87.6298]}>
                  <Popup><strong>Midwest Counseling</strong><br />Chicago, IL</Popup>
                </Marker>
                
                {/* User location marker (dynamic) */}
                {mapCenter[0] !== 39.8283 && (
                   <Marker position={mapCenter}>
                    <Popup><strong>You are here</strong></Popup>
                  </Marker>
                )}
              </MapContainer>
          </div>
        </div>

        {/* Downloadable Guides */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transform transition-transform hover:scale-[1.02]">
            <div>
              <h3 className="text-2xl font-bold mb-2">Family Guide</h3>
              <p className="text-brand-100 mb-6">A complete PDF guide for family members supporting loved ones with anxiety.</p>
            </div>
            <button className="self-start flex items-center gap-2 bg-white text-brand-800 px-4 py-2 rounded-lg font-bold hover:bg-brand-50 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-500/50">
              <Download size={18} aria-hidden="true" /> Download PDF
            </button>
          </div>
           <div className="bg-gradient-to-br from-accent-700 to-accent-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transform transition-transform hover:scale-[1.02]">
            <div>
              <h3 className="text-2xl font-bold mb-2">Workplace Wellness</h3>
              <p className="text-accent-100 mb-6">Strategies for managing stress and maintaining mental health in a professional environment.</p>
            </div>
            <button className="self-start flex items-center gap-2 bg-white text-accent-800 px-4 py-2 rounded-lg font-bold hover:bg-accent-50 transition-colors focus:outline-none focus:ring-4 focus:ring-accent-500/50">
              <Download size={18} aria-hidden="true" /> Download PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};