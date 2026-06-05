import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Donation {
  id: string;
  userName: string;
  userEmail: string;
  amount: number;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  pixKey: string;
}

interface PixDashboardProps {
  token: string;
}

export default function PixDashboard({ token }: PixDashboardProps) {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [pixKey, setPixKey] = useState('priscila.telecom10@gmail.com');
  const [copyMessage, setCopyMessage] = useState('');

  useEffect(() => {
    fetchDonations();
  }, [token]);

  const fetchDonations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/donations`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDonations(response.data);
    } catch (error) {
      console.error('Erro ao buscar doações', error);
    } finally {
      setLoading(false);
    }
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopyMessage('Chave Pix copiada!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  if (loading) {
    return <div className="text-center py-8">Carregando doações...</div>;
  }

  const totalDonations = donations
    .filter(d => d.status === 'confirmed')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-6">
      {/* Pix Key Info */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Chave Pix para Doações</h3>
        <div className="flex items-center gap-3 bg-white/20 p-4 rounded-lg">
          <code className="flex-1 text-sm">{pixKey}</code>
          <button
            onClick={copyPixKey}
            className="bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition"
          >
            Copiar
          </button>
        </div>
        {copyMessage && <p className="text-sm mt-2">{copyMessage}</p>}
      </div>

      {/* Total Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Total de Doações Confirmadas</h3>
        <p className="text-4xl font-bold text-green-600">R$ {totalDonations.toFixed(2)}</p>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nome</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Valor</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Data</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {donations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{donation.userName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{donation.userEmail}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  R$ {donation.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      donation.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : donation.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {donation.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(donation.createdAt).toLocaleDateString('pt-BR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {donations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhuma doação registrada
        </div>
      )}
    </div>
  );
}