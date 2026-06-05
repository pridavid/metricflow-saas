import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">MetricFlow</h1>
          <Link href="/admin">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Admin
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Diagnóstico de Produto com IA
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Descubra insights poderosos sobre seu produto usando Inteligência Artificial
        </p>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">🔍 Análise Profunda</h3>
            <p className="text-gray-600">Análise automática de métricas e KPIs do seu produto</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">🤖 Powered by IA</h3>
            <p className="text-gray-600">Recomendações inteligentes baseadas em padrões</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">📊 Relatórios</h3>
            <p className="text-gray-600">Relatórios detalhados e acionáveis</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-lg mb-8 opacity-90">
            Solicite acesso à plataforma MetricFlow
          </p>
          <button
            onClick={() => alert('Em breve: Formulário de solicitação de acesso')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Solicitar Acesso
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">MetricFlow © 2024</p>
          <p className="text-sm text-gray-400">Diagnóstico de Produto com IA</p>
        </div>
      </footer>
    </div>
  );
}