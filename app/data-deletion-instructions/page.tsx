export default function DataDeletionInstructions() {
  return (
    <main className="py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl">Data Deletion Instructions</h1>
        
        <div className="space-y-6">
          <p className="text-muted-foreground">
            To request the deletion of your data from Autex, you have two options:
          </p>
          
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
            <li>
              <strong>Automatic Deletion:</strong> Log in to your Autex dashboard, go to Settings, and disconnect your Facebook Page. This action will automatically delete all associated data, including your page information, conversations, and access tokens.
            </li>
            <li>
              <strong>Manual Request:</strong> Please send an email to support@autex.app with the subject line "Data Deletion Request". We will process your request and delete all your account data within 7 business days.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
